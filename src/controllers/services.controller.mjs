// import { getCupones } from "../models/cupones.model.mjs";
import { buildResponse } from "../utils/helpers.mjs";
import { getServices as getServicesModels, postServices as postServicesModels, putServices as putServicesModels, deleteServices as deleteServiceModels } from "../models/services.models.mjs";


export async function getServices({ id } ){
    try { 
        const services = await getServicesModels({ id, schema: 'localflow' });

        return buildResponse(200, services, 'get')



    }catch(e) { 
        return buildResponse(500, {message : e}, 'get')
    }
}

export async function postServices({ data }){
    try{
        const services = await postServicesModels({ data, schema: 'localflow' });

        return services

    }catch(e) { 
        return buildResponse(500, {message : e}, 'post')
    }

}


export async function putServices({ data }){
    // try{

    //     const services = await putServicesModels({ data, schema: 'localflow' });

    //     return buildResponse(200, services, 'put')

    // }catch(e) { 
    //     return buildResponse(500, {message : e}, 'put')
    // }

}

export async function deleteServices({ id }){

    // try{

    //     const services = await deleteServiceModels({ id, schema: 'localflow' });

    //     return buildResponse(200, services, 'delete')

        
    // }catch(e) { 
    //     return buildResponse(500, {message : e}, 'delete')
    // }

}   