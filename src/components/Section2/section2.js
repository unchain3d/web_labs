function Section2() {
    const items = [
        {
            image: "images/section2_1.jpg",
            title: "M18 FUEL™ 14",
            description: "Our M18 FUEL™ 14 Top Handle Chainsaw cuts faster than 35cc gas, delivers the power to cut hardwoods, and eliminates the headaches associated with gas engines."
        },
        {
            image: "images/section2_2.jpg",
            title: "SHoRI GOLF ULTRA",
            description: "The SHoRI GOLF ULTRA Professional Chainsaw combines exceptional power with precision engineering for optimal performance in even the most demanding forestry and landscaping tasks."
        },
        {
            image: "images/section2_3.webp",
            title: "HYC40LI",
            description: "The HYC40LI is our lightweight cordless chainsaw from Hyundai. This is the ideal chainsaw for day-to-day woodcutting tasks including felling small to medium-sized trees and chopping logs for wood burners."
        }
    ];

    return (
        <div className="section2">
            {items.map((item, index) => (
                <div className={`section2-column${index + 1}`} key={index}>
                    <img className="section2-image" src={item.image} alt={`lamp${index + 1}`} width="400" height="300" />
                    <h3 className="section2-title">{item.title}</h3>
                    <p className="section2-paragraph">{item.description}</p>
                </div>
            ))}
        </div>
    );
}

export default Section2;
