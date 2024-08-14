import Navbar from "@/components/navbar";

export default function LogsPage() {
    return (
        <div style={{
                      backgroundImage: "url(/background.png)",
                      height: "100vh", // 设置高度
                      backgroundSize: "cover", // 确保背景图像覆盖
                      backgroundPosition: "center", // 居中显示
                  }}>
            <Navbar></Navbar>
            <div className="card backdrop-blur bg-opacity-80 shadow-xl mt-4 ml-6 mr-6 hover:shadow-2xl">
                <div className="card-body">
                    <div className="card-title">
                        <h1 >日志</h1>
                        <div>
                            <button className="btn btn-outline btn-info ml-2">刷新</button>
                            <button className="btn btn-outline btn-error ml-2">清除</button>
                            <button className="btn btn-outline btn-success ml-2">复制</button>
                        </div>
                    </div>

                    <div>
                        <textarea className="textarea w-full " placeholder="Logs"></textarea>
                    </div>
                </div>
            </div>
        </div>
    )
}
