import Navbar from "@/components/navbar";
import LoginForm from "@/components/loginForm";

export default function LoginPage() {
    return (
        <>
            <div style={{
                      backgroundImage: "url(/background.png)",
                      height: "100vh", // 设置高度
                      backgroundSize: "cover", // 确保背景图像覆盖
                      backgroundPosition: "center", // 居中显示
                  }}>
                <Navbar></Navbar>
                <LoginForm></LoginForm>
            </div>
        </>
    )
}