import React, { useEffect, useState } from 'react'
import { Input } from './ui/input'
import {useAuth} from '@/hooks/use-Auth';
import { useSupabase } from '@/hooks/use-SupaBase';
import { v4 as uuidv4 } from 'uuid';

type Props = {}

type State = {

}

const UploadImg = (props: Props) => {
  const supabase = useSupabase()
    const [upLoad , setUpLoad] = useState('')
    const { user} = useAuth();



    // const AddImgToDb = async ()=>{
    //   const {data , error:err} = await supabase.storage.from('avatars').list(user?.id + '/',)
    //   if(err){
    //     console.error(err)
    
    //   } else if(data){
    // setUpLoad(data[0]?.name)
    //   } 
    // }
    // useEffect( ()=>{
    //   AddImgToDb()
    //    // const {} = await supabase.from('users').
    //    },[user?.id])
    // const upLoading = async (e:any)=>{
    //     let file = e.target.files[0];
    //     const {data:upLoaded , error} = await supabase.storage.from('avatars').upload(user?.id + '/' + uuidv4(), file )
    //     if(error){
    //         console.error(error)
    //     } 
    
    //   }
  return (
    <div>
    {/* <img src={`https://axomknksovfgogkvqoak.supabase.co/storage/v1/object/sign/avatars/5599540f-1dc8-4124-a4c6-adfd60d78010/${upLoad}`} />
    <Input type="file" onChange={(e)=>upLoading(e)}/> */}
  </div>
  )
}

export default UploadImg