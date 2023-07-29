<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Rdv extends Model
{
    use HasFactory;

    protected $fillable=['dateRDV', 'heureRDV', 'type','user_id', 'patient_id'];

    public function user(){
        return $this->BelongsTo(User::class);
    }

    public function patient(){
        return $this->BelongsTo(Patient::class);
    }
}
