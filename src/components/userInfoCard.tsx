export type userinfo = {
    outLimit: number;
    inLimit: number;
    used: number;
    token: string;
    realname: boolean;
    regTime: string;
    friendlyGroup: string;
    group: string;
    username: string;
    email: string;
    id: number;
    traffic: number;
    proxies: number;
}

function RealnamedBadge(props: {stat: boolean}) {
    if (props.stat) {
        return (
            <div className="badge badge-accent badge-outline">已实名</div>
        )
    }
    else {
        return (
            <div className="badge badge-error badge-outline">未实名</div>
        )
    }
}

function CalculateTraffic(traffic: number): string {
    if (traffic >= 1000) return (traffic / 1000) + "GiB"
    else if (traffic <=1) return (traffic * 1000) + "KiB"
    else return traffic + "MiB"
}

export default function UserInfoCard(props: {info: userinfo}) {
    return (
        <div className="card backdrop-blur backdrop-brightness-130 shadow-xl mt-6 ml-6 mr-6 hover:shadow-2xl">
            <div className="card-body">
                <div className="card-title">
                    <h1>{props.info.username}</h1>
                    <small>{"#" + props.info.id}</small>
                    <RealnamedBadge stat={props.info.realname}></RealnamedBadge>
                </div>
                <div>
                    <p>邮箱: {props.info.email}</p>
                    <p>用户组: {props.info.friendlyGroup}</p>
                    <p>已用隧道: {props.info.used + "/" + props.info.proxies}</p>
                    <p>剩余流量: {CalculateTraffic(props.info.traffic)}</p>
                    <p>速率: {"↑ " + CalculateTraffic(props.info.outLimit) + "/s | " + CalculateTraffic(props.info.inLimit) + "/s ↓"}</p>
                    <p>注册时间: {props.info.regTime}</p>
                </div>
                <div>
                    <button className="btn btn-neutral w-48">复制Frpc Token</button>
                    <button className="btn btn-error w-48 ml-4">登出</button>
                </div>

            </div>
        </div>
    )
}