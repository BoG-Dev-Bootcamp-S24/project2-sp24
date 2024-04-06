
import React, { createContext, useContext, useEffect, useState } from 'react'
import jwt from "jsonwebtoken"
import { useRouter } from 'next/router';
import { redirect } from 'next/dist/server/api-utils';

export async function getServerSideProps(context){
    const session = context.req.cookies;
    // return {props: {userinfo: "hello"}}
    console.log(context)
    return {props: {userinfo: context.req.cookies}}
    if (session) {
        
        return {props: {userinfo: jwt.verify(session, "BoG")}}
    } else {
        return {props: {userinfo: null}}
    }

    
} 


export function useAppContext() {
    return useContext(AppContext);
}
const AppContext = createContext();

export default function AppWrapper({ children, userinfo }) {
    let [fullName, setFullName] = useState("")
    let [id, setId] = useState("");
    const [ready, setReady] = useState(false)
    const [red, setRed] = useState(false)
    // if (userinfo) {
    //     setFullName(userinfo.fullName)
    //     setId(userinfo.id);
    // } 
    const router = useRouter()
    useEffect(() => {
        
    async function getData() {
        try {
            const response = await fetch("http://localhost:3000/api/user/verify", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },

            credentials: "include"
            
        });

        const data = await response.text()
        if (data !=="Failure") {
            setFullName(JSON.parse(data).fullName)
            setId(JSON.parse(data).id)
            setReady(true)
        } else {
            setRed(true)
            setReady(true)
        }
        
        } catch (error) {
            console.error(error)
        }
        
    }
    getData()
    
    }, [])


    return (
        <AppContext.Provider value={{
            fullName,
            setFullName,
            id,
            setId,
            ready,
            red,
            setReady,
            setRed
        }}>
            {children}
        </AppContext.Provider>

    )
}


