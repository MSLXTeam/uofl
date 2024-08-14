import Navbar from "@/components/navbar";
import ProxyNodeCard from "@/components/proxyNodeCard";
import {ProxyNodeInfo} from "@/components/proxyNodeCard"

function renderDynamicNodes(nodeList: ProxyNodeInfo[]) {
    const listItems = nodeList.map(node => <><ProxyNodeCard info={node} key={node.name}></ProxyNodeCard></>)
    return <div className="grid md:max-xl:grid-cols-2 2xl:grid-cols-4">
        {listItems}
    </div>
}

let nodeList: ProxyNodeInfo[] = [
    {
        allowEc: false,
        bandwidth: 114514,
        bandwidthMagnification: 0.1,
        classify: 1,
        comments: "测试信息",
        enableDefaultTls: true,
        group: "normal",
        hostname: "wcnm.com",
        id: 114514,
        name: "WDNMD Node",
        needRealname: true,
        port: null,
        status: 200,
        unitcostEc: 114,
        description: "测试节点",
        protocolSupport: new Map().set("tcp", true).set("udp", true),
        fullyLoaded: true,
        maxOnlineMagnification: 1
    },
]

export default function TunnelPage() {
    return (
        <>
            <div style={{
                      backgroundImage: "url(/background.png)",
                      height: "100vh", // 设置高度
                      backgroundSize: "cover", // 确保背景图像覆盖
                      backgroundPosition: "center", // 居中显示
                  }}>
                <Navbar></Navbar>
            <div className="card backdrop-blur shadow-xl mt-4 ml-6 mr-6 hover:shadow-2xl">
                <div className="card-body">
                    <div className="card-title">
                        <h1>隧道</h1>
                    </div>
                    {renderDynamicNodes(nodeList)}
                </div>
            </div>
            </div>

        </>
    )
}
