'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion'
import { useUserStatusUpdateMutation } from '@/Redux/Api/userApi';
import { UserInterFace } from '@/Interfaces/InterFaces';
import ShowToastify from '@/utils/ShowToastify';
import TableLoader from '../Loader/TableLoader';
import { useRouter } from 'next/navigation';

const UserTable = ({ userData, isLoading, serial, role }: { userData: UserInterFace[], isLoading: boolean, serial: number, role?: string }) => {

    const [action, setAction] = useState<string | null>("");
    const [updateStatus] = useUserStatusUpdateMutation()
    const route = useRouter()

    const toggleDropdown = (id: string) => {
        setAction((prev) => (prev === id ? null : id));
    };

    const handleStatus = async (id: string, status: string) => {


        if (status == "ACTIVATE") {
            const { error } = await updateStatus({ id, status: "BLOCKED" })
            if (error) {

                return ShowToastify({ error: "Unsuccessful to block the user" })
            }
            ShowToastify({ success: "User is blocked successfully" })
        }
        else {
            const { error } = await updateStatus({ id, status: "ACTIVATE" })
            if (error) {
                return ShowToastify({ error: "Unsuccessful to block or active the user" })
            }
            ShowToastify({ success: "User is active successfully" })
        }

    }

    return (
        <div className="overflow-x-auto overflow-hidden">

            {
                isLoading ?
                    <TableLoader columns={6}></TableLoader>
                    :
                    <table className="min-w-full table-auto">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="px-4 py-2 border">Serial</th>
                                <th className="px-4 py-2 border">Name</th>
                                <th className="px-4 py-2 border">UserName</th>
                                <th className="px-4 py-2 border">Email</th>
                                <th className="px-4 py-2 border">Role</th>
                                <th className="px-4 py-2 border">status</th>
                                {/* <th className="px-4 py-2 border">Action</th> */}
                                {/* <th className="px-4 py-2 border">Amount</th> */}
                                {/* <th className="px-4 py-2 border">Purchase Date</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {
                                userData?.map((item: UserInterFace, index: number) => (
                                    <motion.tr initial={{ y: 100 * (index + 1), opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { duration: 0.5 } }} key={index} className="border-b text-center">
                                        <td className="px-4 text-nowrap py-2">{serial + index + 1}</td>
                                        <td className="px-4 text-nowrap py-2">{item.name}</td>
                                        <td className="px-4 text-nowrap py-2">{item.userName}</td>
                                        <td className="px-4 text-nowrap py-2">{item.email}</td>
                                        <td className="px-4 text-nowrap py-2">{item.role}</td>
                                        <td className="px-4 text-nowrap py-2 space-x-2 flex justify-center gap-5 relative">
                                            {/* <button onClick={() => handleStatus(item?.id, item?.status)} className='px-4 py-1 hover:scale-105 transition-transform font-semibold rounded-lg bg-primary text-white'>{item.status == "BLOCKED" ? "Active" : "Block"}</button> */}
                                            {/* {
                                                role == "seller" ?
                                                    <button onClick={() => route.push(`/sellers/${item?.id}`)} className='px-4 py-1 hover:scale-105 transition-transform font-semibold rounded-lg bg-primary text-white'>View</button>
                                                    :
                                                    ""
                                            } */}
                                            <p className={`px-3 py-1 w-fit lowercase  ${item.status == "BLOCKED" ? "bg-red-500/30 text-red-500" : "bg-green-500/20 text-green-500 "}`}>{item.status}</p>
                                            <button onClick={() => toggleDropdown(item.id)} className='font-bold p-2'>:</button>
                                            {
                                                action === item.id ?
                                                    <div className='border p-2 w-32 border-gray-400 flex flex-col gap-2 rounded-lg absolute top-0 left-12 bg-white z-50 shadow-lg'>
                                                        <button className='px-2 rounded-lg text-green-600  bg-green-200'>Active</button>
                                                        <button className='px-2 rounded-lg text-red-600 bg-red-200'>Block</button>
                                                    </div>
                                                    :
                                                    ""
                                            }
                                        </td>

                                        {/* <td className="px-4 py-2">{item.createdAt.split("T")[0]}</td> */}
                                    </motion.tr>
                                ))}
                        </tbody>
                    </table>
            }


        </div>
    );
};

export default UserTable;



