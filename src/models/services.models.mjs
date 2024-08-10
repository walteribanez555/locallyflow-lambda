
// Dependencies
import { DatabaseOperations } from '../utils/database.mjs';
import { buildResponse, validateData, colorLog, age } from '../utils/helpers.mjs';


const tableName = "service";
const idField = "service_id";
const keyField = "token";


const model = {
    "service_id" : "number",
    "token" : "string",
    "owner" : "string",
    "status" : "number",
}

export async function getServices({ id, schema }) {
    try {
      const database = new DatabaseOperations(tableName, schema);
      const data = {
        where: {
          [keyField]: id,
        },
      };
      const response = await database.read(data);
      return response;
    } catch (error) {
      colorLog(` GET SERVICES ERROR:  ${JSON.stringify(error)}`, "red", "reset");
      return buildResponse(500, error, "get");
    }
  }


export async function postServices({ data, schema}) {
    try{
        const database = new DatabaseOperations( tableName, schema);
        const newRegister = validateData(data, model);
        if( Object.keys( newRegister ).length === 0) 
            return buildResponse(400, {message : 'Missing required fields or not valid'}, 'post');


        const response = await database.create(newRegister, keyField);
        return buildResponse(200, response, 'post', keyField, data);

    }catch(error) { 
        colorLog( ` POST BLOGS ERROR:  ${ JSON.stringify( error ) }`, 'red', 'reset' );
        return buildResponse( 500, error, 'post' );
    }

}

export async function putServices() { 
    // try{

    // }catch(error) { 

    // }
}


export async function deleteServices() { 
    // try{
        
    // }catch(error) { 

    // }
}