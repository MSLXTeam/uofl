export type ProxyNodeInfo = {
    allowEc: boolean;
    bandwidth: number;
    bandwidthMagnification: number;
    classify: number;
    comments: string;
    enableDefaultTls: boolean;
    group: string;
    hostname: string;
    id: number;
    maxOnlineMagnification: number;
    name: string;
    needRealname: boolean;
    port: [number, number] | null;
    status: number;
    unitcostEc: number;
    description: string;
    protocolSupport: Map<string, boolean>;
    fullyLoaded: boolean;
}

let getNodeArea: (classify: number) => string = function (classify: number): string {
    switch (classify) {
        case 1:
            return "大陆"
        case 2:
            return "港澳台"
        case 3:
            return "海外"
    }
    return "未知"
};

export default function ProxyNodeCard(props: { info: ProxyNodeInfo }) {
    return <>
        <div className="card bg-base-100 shadow-xl mt-4 ml-6 mr-6 hover:shadow-2xl">
            <div className="card-body">
                <div className="card-title">
                    <h1>{props.info.name}</h1>
                    <small className="text-neutral-content">{"#" + props.info.id}</small>
                    <div
                        className={props.info.needRealname ? "badge badge-error badge-outline" : "badge badge-accent badge-outline"}>{props.info.needRealname ? "需实名" : "无需实名"}</div>
                </div>
                <div>
                    <p>{"开放端口: " + (props.info.port == null || props.info.port == void (0) ? "无限制" : (props.info.port!![0] + "到" + props.info.port!![1]))}</p>
                    <p>{"所属区域: " + getNodeArea(props.info.classify)}</p>
                    <p>{"描述: " + props.info.description}</p>
                    <div>
                        <div
                            style={{display: "inline-block"}}
                        ><p className={props.info.protocolSupport.get("tcp") ? "badge badge-accent ml-0.5" : "hidden"}>tcp</p>
                        </div>
                        <div
                            style={{display: "inline-block"}}><p
                            className={props.info.protocolSupport.get("udp") ? "badge badge-accent ml-0.5" : "hidden"}>udp</p>
                        </div>
                        <div
                            style={{display: "inline-block"}}><p
                            className={props.info.protocolSupport.get("http") ? "badge badge-accent ml-0.5" : "hidden"}>http</p>
                        </div>
                        <div
                            style={{display: "inline-block"}}><p
                            className={props.info.protocolSupport.get("https") ? "badge badge-accent ml-0.5" : "hidden"}>https</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}
