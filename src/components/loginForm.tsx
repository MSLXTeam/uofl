'use client';

import Link from "next/link";
import { useState } from "react";

export default function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    async function handleLogin() {

        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        const data = await response.json();
        // 在这里处理响应
    }

    return (
        <div className="h-screen w-screen sm:grid grid-cols-2">
            <div className="card w-full max-w-md rounded-none backdrop-blur-md backdrop-brightness-130 shadow-xl hover:shadow-2xl">
                <h1 className="text-black text-2xl mt-10 ml-10">登录Natayark ID</h1>
                <form className="card-body" onSubmit={handleLogin}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">电子邮件/用户名</span>
                        </label>
                        <input type="email" name="username" placeholder="email" className="input input-bordered"
                               required onChange={(e) => setUsername(e.target.value)} value={username} />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">密码</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered"
                               required onChange={(e) => setPassword(e.target.value)} value={password}/>
                        <label className="label">
                            <Link href="https://openid.17a.ink/reset_password"
                                  className="label-text-alt link link-hover">忘记密码</Link>
                        </label>
                        <label className="label">
                            <Link href="https://openid.17a.ink/register"
                                  className="label-text-alt link link-hover">点击注册</Link>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button type="submit" className="btn bg-primary-content" onClick={() => handleLogin()}>登录</button>
                    </div>
                </form>
            </div>
        </div>
    );
}