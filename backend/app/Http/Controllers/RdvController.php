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
        return Rdv::with(["patient","user"])->orderBy('id', 'desc')->paginate(5);
       
  }
  public function destroy(Rdv $rdv){
      $rdv->delete();
      return response()->json('Rdv Deleted');
  }
  public function store(StoreRdvRequest $request){
      Rdv::create($request->validated());
      return response()->json('Rdv Created');
  }
  public function update(StoreRdvRequest $request, Rdv $rdv){
      $rdv->update($request->validated());
      return response()->json('Rdv Updated');
  }
  public function show(Rdv $rdv){
      return new RdvResource($rdv);
  }
}
