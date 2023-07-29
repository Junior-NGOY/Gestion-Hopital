<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreRdvRequest;
use App\Http\Resources\RdvResource;
use App\Models\Rdv;
use Illuminate\Http\Request;

class RdvController extends Controller
{
    public function index(){
        //  return new PatientCollection(Patient::orderBy('id', 'desc')->paginate(5));
        return Rdv::orderBy('id', 'desc')->paginate(5);
       
  }
  public function destroy(Rdv $user){
      $user->delete();
      return response()->json('User Deleted');
  }
  public function store(StoreRdvRequest $request){
      Rdv::create($request->validated());
      return response()->json('User Created');
  }
  public function update(StoreRdvRequest $request, Rdv $user){
      $user->update($request->validated());
      return response()->json('User Updated');
  }
  public function show(Rdv $user){
      return new RdvResource($user);
  }
}
