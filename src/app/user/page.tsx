import Navbar from "@/components/navbar";
import UserInfoCard, {userinfo} from "@/components/userInfoCard";

let info: userinfo = {
    outLimit: 1000,
    inLimit: 1000,
    used: 1,
    token: "wdnmdtoken2233",
    realname: false,
    regTime: "Unknown",
    friendlyGroup: "klf",
    group: "klf",
    username: "klf",
    email: "klf@klf.com",
    id: 114514,
    traffic: 11451.4,
    proxies: 4
}

export default function ProfilePage() {
    return (
        <>
            <div style={{
                      backgroundImage: "url(/background.png)",
                      height: "100vh", // 设置高度
                      backgroundSize: "cover", // 确保背景图像覆盖
                      backgroundPosition: "center", // 居中显示
                  }}>
                <Navbar></Navbar>
                <UserInfoCard info={info}></UserInfoCard>
            </div>
        </>
    )
}