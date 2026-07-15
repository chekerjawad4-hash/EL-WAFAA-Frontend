import "../styles/RewardsSection.css";

function RewardsSection(){

  const rewards = [
    {
      title:"🎁 مكافأة التسجيل",
      text:"سجل حسابك واحصل على مكافأة ترحيبية."
    },
    {
      title:"🪙 مكافأة DZC",
      text:"احصل على مزايا خاصة عند امتلاك DZC."
    },
    {
      title:"🚀 عروض EL WAFAA",
      text:"تابع الحملات والعروض القادمة."
    }
  ];

  return(
    <section className="rewards-section">

      <h2>🎁 المكافآت والعروض</h2>

      <div className="rewards-list">

        {rewards.map((item,index)=>(

          <div className="reward-card" key={index}>

            <h3>{item.title}</h3>
            <p>{item.text}</p>

          </div>

        ))}

      </div>

    </section>
  );

}

export default RewardsSection;
