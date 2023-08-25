'use client'

import { getUserId } from '@/services/axiosService';
import { useSession } from 'next-auth/react';
import { createContext, useState, useEffect } from 'react'

export const ThemeContext = createContext({})

export default function ThemeProvider({ children }) {
    const session = useSession();
    const [uid, setUid] = useState("");
    const fetchData = async () => {
        try {
            if (session && session.status == 'authenticated') {
                const result = await getUserId(session.data.user);
                console.log(result);
                setUid(result.data.userId);

            }
        }
        catch (err) {
            console.log(err)
        }

    }
    useEffect(() => {
        fetchData();
    }, [session]);



    return <ThemeContext.Provider value={{
        uid
    }}>{children}</ThemeContext.Provider>
}