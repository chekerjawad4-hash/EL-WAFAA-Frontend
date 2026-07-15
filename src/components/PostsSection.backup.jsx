import "../styles/PostsSection.css";

function PostsSection(){

  const posts = [
    {
      title:"🚀 تحديث جديد للمنصة",
      text:"تم تحسين تجربة المستخدم وإضافة ميزات جديدة."
    },
    {
      title:"🪙 DZC Coin",
      text:"نعمل على تجهيز مراحل إطلاق عملة DZC."
    },
    {
      title:"🔐 أمان المستخدمين",
      text:"نواصل تطوير أنظمة الحماية والمحافظ."
    }
  ];

  return(
    <section className="posts-section">

      <h2>📢 منشورات EL WAFAA</h2>

      {posts.map((post,index)=>(
        <div className="post-card" key={index}>

          <h3>{post.title}</h3>
          <p>{post.text}</p>

        </div>
      ))}

    </section>
  );

}

export default PostsSection;
