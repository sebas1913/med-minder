'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import Navbar from "@/components/organisms/navbar/Navbar";
import Button from "@/components/atoms/button/Button";
import Spinner from "@/components/atoms/spinner/Spinner";

export default function PrivateLayout({ children }: { children: React.ReactNode }) {
    const { status } = useSession();
    const router = useRouter();
    const [isVerified, setIsVerified] = useState(false);

    useEffect(() => {
        if (status === "loading") return;

        if (status === "unauthenticated") {
            router.replace("/");
        } else {
            setIsVerified(true);
        }
    }, [status, router]);

    if (status === "loading" || !isVerified) {
        return <Spinner />;
    }

    const handleLogout = async () => {
        await signOut();
        router.push("/");
    };

    return (
        <>
            <Navbar>
                <Button onClick={handleLogout} variant="transparent">
                    Log out
                </Button>
            </Navbar>
            <main>{children}</main>
        </>
    );
}
