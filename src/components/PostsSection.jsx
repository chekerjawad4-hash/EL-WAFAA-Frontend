import "../styles/PostsSection.css";

function PostsSection(){

  const posts = [
    {
      type:"UPDATE",
      title:"🚀 تحديث جديد للمنصة",
      text:"تم تحسين تجربة المستخدم وإضافة ميزات جديدة داخل EL WAFAA Exchange.",
      date:"اليوم"
    },
    {
      type:"DZC",
      title:"🪙 DZC Coin",
      text:"نعمل على تجهيز مراحل إطلاق عملة DZC وتطوير نظامها.",
      date:"قريباً"
    },
    {
      type:"SECURITY",
      title:"🔐 أمان المستخدمين",
      text:"نواصل تطوير أنظمة الحماية والمحافظ لضمان أفضل تجربة.",
      date:"مستمر"
    }
  ];

  return(
    <section className="posts-section">

      <h2>📢 منشورات EL WAFAA</h2>

      {posts.map((post,index)=>(
        <div className="post-card" key={index}>

          <small>
            {post.type} • {post.date}
          </small>

          <h3>{post.title}</h3>

          <p>{post.text}</p>

        </div>
      ))}

    </section>
  );
}

export default PostsSection;
