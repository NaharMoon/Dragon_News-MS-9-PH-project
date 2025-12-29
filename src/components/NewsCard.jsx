// NewsCard.jsx
import { FaRegBookmark, FaShareAlt, FaEye } from "react-icons/fa";
import { Link } from "react-router";

const formatDate = (iso) => {
  if (!iso) return "";
  const d = new Date(iso);
  // Example: 2025-04-22 -> Tuesday, April 22, 2025
  return d.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const Stars = ({ value = 0 }) => {
  const v = Math.max(0, Math.min(5, Number(value) || 0));
  return (
    <div className="rating rating-sm scale-90 gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <input
          key={i}
          type="radio"
          // name={`rating-${Math.random()}`}             //red mark hoye chilo tai comment kore dialam then UI unchanged
          className="mask mask-star-2 bg-orange-400"
          checked={i === v}
          readOnly
        />
      ))}
    </div>
  );
};

const NewsCard = ({ news, onReadMore }) => {
  const {
    id,
    title,
    rating,
    total_view,
    author,
    thumbnail_url,
    details,
  } = news || {};

  const shortDetails =
    (details || "").length > 170 ? `${details.slice(0, 170)}...` : details;

  return (
    <div className="card bg-base-100 shadow-md border border-base-200">
      {/* Header */}
      <div className="flex items-center justify-between bg-base-200 px-5 pt-3 pb-1">
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="w-11 rounded-full">
              <img src={author?.img} alt={author?.name || "author"} />
            </div>
          </div>

          <div className="leading-tight">
            <h3 className="font-semibold">{author?.name}</h3>
            <p className="text-xs text-base-content/60">
              {formatDate(author?.published_date)}
            </p>
          </div>
        </div>

        <div className="flex items-center text-base-content/70">
          <button className="btn btn-ghost btn-lg scale-90 btn-square" title="Bookmark">
            <FaRegBookmark />
          </button>
          <button className="btn btn-ghost btn-lg scale-90 btn-square" title="Share">
            <FaShareAlt />
          </button>
        </div>
      </div>

      {/* Body */}
      <div className="card-body pt-4">
        <div className="flex items-start gap-2">
          <h2 className="card-title text-lg leading-snug flex-1">{title}</h2>

          {/* optional badge */}
          {rating?.badge && (
            <span className="badge badge-outline capitalize text-secondary">
              {rating.badge}
            </span>
          )}
        </div>

        <figure className="mt-2 overflow-hidden rounded-xl">
          <img
            src={thumbnail_url}
            alt={title}
            className="w-full h-56 object-cover"
          />
        </figure>

        <p className="text-sm text-base-content/80 mt-2">{shortDetails}</p>

        <div className="mt-2">
          <Link to={`/news-details/${id}`}
            className="link link-primary font-medium text-orange-500 hover:text-orange-600"
            onClick={() => onReadMore?.(news)}
          >
            Read More
          </Link>
        </div>

        {/* Footer */}
        <div className="mt-4 flex items-center justify-between border-t border-base-300 pt-4">
          <div className="flex items-center gap-2">
            <Stars  value={rating?.number} />
            <span className="text-sm font-semibold text-accent">
              {(rating?.number ?? 0).toFixed?.(1) ? (rating.number).toFixed(1) : rating?.number}
            </span>
          </div>

          <div className="flex items-center gap-2 text-base-content/70">
            <FaEye />
            <span className="text-sm">{total_view ?? 0}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
