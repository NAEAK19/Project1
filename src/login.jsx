import { useState } from "react";

function Login({ setIsLogin }) {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const [loginCount, setLoginCount] = useState(0);

  const [locked, setLocked] = useState(false);

  const [countdown, setCountdown] = useState(60);

  const login = (e) => {

    e.preventDefault();

    if (locked) return;

    // Username และ Password ที่ถูกต้อง
    if (username === "admin" && password === "1234") {

      setError("");
      setLoginCount(0);
      setIsLogin(true);
      return;

    }

    const count = loginCount + 1;

    setLoginCount(count);

    // ใส่ผิดครบ 3 ครั้ง
    if (count >= 3) {

      setLocked(true);

      let time = 60;

      setCountdown(time);

      setError("🚫 คุณกรอกรหัสผิดครบ 3 ครั้ง ล็อค 1 นาที รอไปก่อนนะไอง่าว");

      const timer = setInterval(() => {

        time--;

        setCountdown(time);

        if (time <= 0) {

          clearInterval(timer);

          setLocked(false);

          setLoginCount(0);

          setError("");

          setUsername("");

          setPassword("");

        }

      }, 1000);

    } else {

      // ข้อความเตือนแต่ละครั้ง
      if (count === 1) {

        setError("❌ Username หรือ Password ไม่ถูกต้อง (ครั้งที่ 1/3)");

      } else if (count === 2) {

        setError("⚠️ ยังไม่ถูกนะ ลองตรวจสอบ Username และ Password อีกครั้ง (ครั้งที่ 2/3)");

      }

    }

  };

  return (

    <div className="login-page">

      <div className="bg1"></div>
      <div className="bg2"></div>
      <div className="bg3"></div>

      <form className="card" onSubmit={login}>

        <h1>LOGIN</h1>

        <p>Welcome Back</p>

        <input
          type="text"
          placeholder="Username"
          value={username}
          disabled={locked}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          disabled={locked}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && (

          <div className="error" key={error}>

            <strong>{error}</strong>

            {locked && (

              <p style={{ marginTop: "10px" }}>

                ⏳ ระบบจะปลดล็อกในอีก <b>{countdown}</b> วินาที

              </p>

            )}

          </div>

        )}

        <button type="submit" disabled={locked}>

          {locked ? `Locked (${countdown}s)` : "LOGIN"}

        </button>

      </form>

    </div>

  );

}

export default Login;