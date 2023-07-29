<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreConsultationRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'patient_id'=>[''], 
            'motif_id'=>[''],
            'taille'=>[''],
            'poids'=>[''], 
            'temperature'=>[''], 
            'glycemie'=>[''], 
            'cholesterole'=>[''], 
            'pa'=>[''],
            'pas'=>[''], 
            'pad'=>[''], 
            'pouls'=>[''], 
            'fc'=>[''], 
            'fr'=>[''],
            'diurese'=>[''],
            'spo2'=>[''],
            'ta'=>[''],
            'ddr'=>[''],
            'dpa'=>[''],
            'pc'=>[''],
            'imc'=>[''],
            'signeGen'=>[''],
            'hma'=>[''], 
            'ca'=>[''], 
            'antecedant'=>[''], 
            'structure_id'=>[''],
            'user_id'=>[''],
            'terrains'=>[''],
            'examens'=>[''],
           // 'produits.*'=>['array'],
            'produits'=>['array'],
            'posologie'=>'array',
        ];
    }
}
