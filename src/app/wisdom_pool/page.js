'use client'
import React from "react";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import addData from "@/firebase/firestore/addData";

function Page() {
    const { user } = useAuthContext()
    const router = useRouter()
    
    const data = {
        name: 'John snow',
        house: 'Stark'
      }
    addData('users', 'user-id', data)
    console.log(data)

    React.useEffect(() => {
        if (user == null) router.push("/")
    }, [user])

    return (<h1>Only logged in users can view this page</h1>);
}

export default Page;