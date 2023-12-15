import ChainsawItem from '../ChainsawItem/chainsawItem';

function ChainsawsSection() {
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
      },
      {
        image: "images/section2_4.webp",
        title: "Tatra Garden MS 180",
        description: "The Tatra Garden MS 180 chainsaw is renowned for its powerful performance and ergonomic design, making it a trusted tool for both professional and amateur users in various outdoor applications."
      }
    ];
  
    return (
      <div className="chainsaw-section">
        {items.map((item, index) => (
          <ChainsawItem item={item} key={index} />
        ))}
      </div>
    );
  }
  
  export default ChainsawsSection;