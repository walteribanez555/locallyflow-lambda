// import { getCupones } from "../models/cupones.model.mjs";
import { buildResponse } from "../utils/helpers.mjs";
import { getServices as getServicesModels } from "../models/services.models.mjs";


export async function getServices({ id } ){
    try { 
        const services = await getServicesModels({ id, schema: 'localflow' });

        return buildResponse(200, services, 'get')



    }catch(e) { 
        return buildResponse(500, {message : e}, 'get')
    }
}