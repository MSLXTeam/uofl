import Navbar from "@/components/navbar";


export default function Home() {
  return (
      <>
          <div style={{
                      backgroundImage: "url(/background.png)",
                      height: "100vh", // 设置高度
                      backgroundSize: "cover", // 确保背景图像覆盖
                      backgroundPosition: "center", // 居中显示
                  }}>
              <Navbar></Navbar>
              <div
                  className="hero">
                  <div className="hero-overlay bg-opacity-40"></div>
                  <div className="hero-content text-neutral-content text-center">
                      <div className="max-w-md">
                          <h1 className="mb-5 text-5xl font-bold">Welcome to UOFL</h1>
                          <p className="mb-5">
                              An unofficial OpenFrp launcher based on Tauri and Next.js
                          </p>
                          <a className="btn btn-ghost backdrop-blur-xl hover:btn-content" href={"/user/login"}>Login</a>
                      </div>
                  </div>
              </div>
          </div>
      </>
  );
}
