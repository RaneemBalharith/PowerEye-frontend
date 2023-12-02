import React , {createContext, useState,useContext,useEffect} from 'react';
import { PowerEyeContext } from './powerEye.context';
import { getApplianceEnergyRequest } from '../api/apiManager';
export const ApplianceAnalysisContext = createContext()
export const ApplianceAnalysisContextProvider = ({children}) =>{
    const {token} = useContext(PowerEyeContext)
    const [data , setData] = useState([])
    let ids = ["64d161e193d44252699aa219", "64d161fd93d44252699aa21a", "64d1629393d44252699aa21b", "64d162bf93d44252699aa21c"]
    const weeks = [{week:'This Week', id:0},{week:'Last Week', id:1},{week:'Two Week Ago', id:2},{week:'Three Weeks Ago', id:3},{week:'Forth Weeks Ago', id:4}]
    const getAllApplianceEnergyWeekly = async(token,title,timeframe,timeSinceCurrent,applianceId) =>{
        let res = getApplianceEnergyRequest(token,applianceId,timeframe,timeSinceCurrent).then((res)=>{
            if(res["energy_values"] != undefined){
            let data =res["energy_values"].map((item)=>{
                return {
                    label :item[0],
                    energy:item[1],
                    title,
    
                }
            })
            let result =  {title:title,label:data.map((a)=> a.label),energy:data.map((a)=> a.energy)}
            return  result
    
        }
        
    })
    return res
      }

    useEffect(()=>{
        let arr = weeks.map(async(item)=>{
            let weekEnergy =  await getAllApplianceEnergyWeekly(token,item.week,2,item.id,ids[1]).then((res)=>{return  res})
                return weekEnergy
                }) 
        Promise.all(arr).then((mappedData) => {
            console.log(mappedData)
                    setData(mappedData.filter((value) => value !== undefined));
                  });
      },[])
    return(
    <ApplianceAnalysisContext.Provider value={{data , setData}}>
        {children}
    </ApplianceAnalysisContext.Provider>
)
}