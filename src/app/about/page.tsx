import Navbar from "@/components/navbar";

export default function About() {
    return (
        <div style={{
                      backgroundImage: "url(/background.png)",
                      height: "100vh", // 设置高度
                      backgroundSize: "cover", // 确保背景图像覆盖
                      backgroundPosition: "center", // 居中显示
                  }}>
            <Navbar></Navbar>
            <div className="card backdrop-blur w-5/6 shadow-xl mt-6 ml-6 hover:shadow-2xl">
                <div className="card-body">
                    <h1 className="card-title">Unofficial OpenFrp Launcher</h1>
                    <p>Early Access Preview</p>
                </div>
            </div>
            <div className="collapse collapse-arrow w-5/6 backdrop-blur shadow-xl mt-6 ml-6 hover:shadow-2xl">
                <input type="radio" name="accordion" defaultChecked/>
                <div className="collapse-title text-xl font-medium">作者</div>
                <div className="collapse-content">
                    <a href={"mailto:mojave@zyghit.cn"} className="link link-hover">Mojave Hao</a>
                </div>
            </div>
            <div className="collapse collapse-arrow w-5/6 backdrop-blur shadow-xl mt-6 ml-6 hover:shadow-2xl">
                <input type="radio" name="accordion"/>
                <div className="collapse-title text-xl font-medium">开源项目使用目录</div>
                <div className="collapse-content">
                    <div className="divider"></div>
                    <p>tauri | version: 1.7.0</p>
                    <div className="divider"></div>
                    <a href={"https://github.com/ZGIT-Network/OPENFRP-APIDOC"} target={"_blank"}>OpenFrp OpenAPI | </a>
                    <a href={"https://zgitopenfrp.apifox.cn"} target={"_blank"}>Apifox</a>
                    <div className="divider"></div>
                </div>
            </div>
        </div>
    )
}