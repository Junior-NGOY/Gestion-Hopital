<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Consultation extends Model
{
    use HasFactory;
   
    protected $fillable = [
        'patient_id', 'motif_id', 'taille', 'poids', 'temperature', 'glycemie', 'cholesterole', 'pa',
         'pas', 'pad', 'pouls', 'fc', 'fr','diurese','spo2','ta','ddr','dpa','pc','imc','signeGen',
         'hma', 'ca', 'antecedant', 'structure_id','user_id'
     ];
    public function patient()
    {
        return $this->belongsTo(Patient::class);
    }
    public function motif()
    {
        return $this->belongsTo(Motif::class);
    }
    public function structure()
    {
        return $this->belongsTo(Structure::class);
    }
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function terrains(){
        return $this->belongsToMany(Terrain::class,'consultation_terrains')->withTimestamps();
    }

    public function details(){
        return $this->belongsToMany(Detail::class,'consultation_details')->withTimestamps();
    }

    public function produits(){
        return $this->belongsToMany(Produit::class,'consultation_produits')->withPivot('posologie')->withTimestamps();
    }

    public function consultation_terrain(){
        return $this->hasMany(ConsultationTerrain::class);
    }
    public function consultation_produit(){
        return $this->hasMany(ConsultationProduit::class);
    }
}
