<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Contact;

class ContactController extends Controller
{
    function addContact(Request $request, $action = "add"){
        $token = $request->token;
        $user_id =Auth::getPayload($token)->get('sub');       
        if($action == "add"){
            $contact = new Contact;
        }else{
            $id=$request->id;
            $contact = Contact::find($id)->where("user_id",$user_id)->first();
        }
        $contact->name = $request->name;
        $contact->phone = $request->phone;
        $contact->address_longitude = $request->address_longitude;
        $contact->address_lattitude = $request->address_lattitude;
        $contact->user_id=$user_id;
        $contact->save();

        return response()->json([
            'status' => 'Success',
            'contact-data' => $contact
        ]);
    }
    function updateContact(Request $request){
        $token = $request->token;
        $user_id =Auth::getPayload($token)->get('sub');       
        $contact_id=$request->id;
        $contact = Contact::find($contact_id);
        $contact->name = $request->name;
        $contact->phone = $request->phone;
        $contact->address_longitude = $request->address_longitude;
        $contact->address_lattitude = $request->address_lattitude;
        $contact->user_id=$user_id;
        $contact->save();
        

        return response()->json([
            'status' => 'Success',
            'contact-data' => $contact
        ]);
    }

    function getContacts(Request $request){
        $token = $request->token;
        $user_id =Auth::getPayload($token)->get('sub');  
        $contacts = Contact::all()->where("user_id",$user_id);
        
        
        return response()->json([
            'status' => 'Success',
            'contact-data' => $contacts
        ]);
    }

    function deleteContact(Request $request){
        $token = $request->token;
        $user_id =Auth::getPayload($token)->get('sub');  
        $contact = Contact::find($request->id)->delete();
        return json_encode(["success" => true]);
    }





}