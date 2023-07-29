<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTerrainRequest;
use App\Http\Resources\TerrainResource;
use App\Models\Terrain;
use Illuminate\Http\Request;

class TerrainController extends Controller
{
    public function index(){
        //  return new PatientCollection(Patient::orderBy('id', 'desc')->paginate(5));
        return Terrain::orderBy('id', 'desc')->paginate(5);
    }
    public function store(StoreTerrainRequest $request){
        Terrain::create($request->validated());
      return response()->json('Terrain Created');
    }

    public function update(StoreTerrainRequest $request, Terrain $terrain){
        $terrain->update($request->validated());
        return response()->json('Terrain Updated');
    }
    public function destroy(Terrain $terrain){
        $terrain->delete();
      return response()->json('Terrain Deleted');
    }
    public function show(Terrain $terrain){
        return new TerrainResource($terrain);
    }
}
