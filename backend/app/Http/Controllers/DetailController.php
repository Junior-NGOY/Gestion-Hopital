<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreDetailRequest;
use App\Http\Resources\DetailResource;
use App\Models\Detail;
use Illuminate\Http\Request;

class DetailController extends Controller
{
 public function index(){
        //  return new PatientCollection(Patient::orderBy('id', 'desc')->paginate(5));
        return Detail::with(["examen"])->orderBy('id', 'desc')->paginate(5);
  }
  public function destroy(Detail $detail){
      $detail->delete();
      return response()->json('Detail Deleted');
  }
  public function store(StoreDetailRequest $request){
      Detail::create($request->validated());
      return response()->json('Detail Created');
  }
  public function update(StoreDetailRequest $request, Detail $detail){
      $detail->update($request->validated());
      return response()->json('Detail Updated');
  }
  public function show(Detail $detail){
      return new DetailResource($detail);
  }
}
