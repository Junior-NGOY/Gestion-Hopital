<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Terrain extends Model
{
    use HasFactory;
    protected $fillable =["libelle"];

    public function consultations(){
        return $this->belongsToMany(Consultation::class,'consultation_terrains')->withTimestamps();
    }

    public function consultation_terrain(){
        return $this->hasMany(ConsultationTerrain::class);
    }
}
