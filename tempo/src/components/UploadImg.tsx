import React, { useState } from 'react'
import { Input } from './ui/input'
import {useAuth} from '@/hooks/use-Auth';
// import { v4 as uuidv4 } from 'uuid';

type Props = {}

const UploadImg = (props: Props) => {
    // const [upLoad , setUpLoad] = useState()
    // const { user} = useAuth();
    // const supabase = useSupabase()
    // const upLoading = async (e:any)=>{
    //     let file = e.target.files[0];
    //     const {data:upLoaded , error} = await supabase.storage.from('avatars').upload(user?.id + '/' + uuidv4(), file )
    //     if(error){
    //         console.error(error)
    //     } 
    //     if(upLoaded){
    //         const {data , error} = await supabase.storage.from('avatars').list(user?.id + '/',)
    //         if(error){
    //             console.error(error)
    //         }
    //         if(data){
    //             setUpLoad(data)
    //         }
    
    //     }
    
    //   }
  return (
    <div>
    {/* <img src={`https://axomknksovfgogkvqoak.supabase.co/storage/v1/object/sign/avatars/5599540f-1dc8-4124-a4c6-adfd60d78010/${upLoad[0]?.name}`} /> */}
    {/* <Input type="file" onChange={(e)=>upLoading(e)}/> */}
  </div>
  )
}

export default UploadImg