const BiographyCard = ({ name, born, description, sortYear }) => {
  return (
    <article className="bio-card">
      <div className="bio-card__dot"></div>
      <div className="bio-card__year">{sortYear}</div>
      <div className="bio-card__content">
        <span className="bio-card__born">Born {born}</span>
        <h2 className="bio-card__name">{name}</h2>
        <p className="bio-card__description">{description}</p>
      </div>
    </article>
  );
};

export default BiographyCard;
