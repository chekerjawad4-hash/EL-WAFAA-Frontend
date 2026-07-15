import "../styles/RewardsSection.css";

function RewardsSection(){

  const rewards = [
    {
      type:"WELCOME",
      title:"🎁 مكافأة التسجيل",
      text:"سجل حسابك واحصل على مكافأة ترحيبية من EL WAFAA.",
      status:"متاحة"
    },
    {
      type:"DZC",
      title:"🪙 مكافأة DZC",
      text:"احصل على مزايا خاصة عند امتلاك واستخدام DZC Coin.",
      status:"قريباً"
    },
    {
      type:"EVENT",
      title:"🚀 عروض EL WAFAA",
      text:"تابع الحملات والمسابقات والعروض القادمة.",
      status:"مستمرة"
    }
  ];

  return(
    <section className="rewards-section">

      <h2>🎁 المكافآت والعروض</h2>

      <div className="rewards-list">

        {rewards.map((item,index)=>(

          <div className="reward-card" key={index}>

            <small>
              {item.type} • {item.status}
            </small>

            <h3>{item.title}</h3>

            <p>{item.text}</p>

          </div>

        ))}

      </div>

    </section>
  );

}

export default RewardsSection;
