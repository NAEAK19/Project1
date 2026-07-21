function Home({ setIsLogin }) {
  return (
    <div className="home">
      <h1>😘ว๊ายยยยยโดนหลอก😜</h1>

      <p>🎉 ยินดีต้อนรับสู่เว็บของสุดหล่อ!</p>

      <button onClick={() => setIsLogin(false)}>
        Logout
      </button>
    </div>
  );
}

export default Home;