function ChainsawItem({ item }) {
  return (
    <div className="chainsaw-section-column">
      <img className="chainsaw-section-image" src={item.image} alt={item.title} width="400" height="300" />
      <h3 className="chainsaw-section-text-title">{item.title}</h3>
      <p className="chainsaw-section-text-paragraph">{item.description}</p>
    </div>
  );
}

export default ChainsawItem;