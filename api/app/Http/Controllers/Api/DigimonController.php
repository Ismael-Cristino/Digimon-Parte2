<?php
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Digimon;

class DigimonController extends Controller
{
    /**
     * Display a listing of the resource.
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $digimons = Digimon::all();
        return $digimons;
    }

    /**
     * Store a newly created resource in storage.
     *  @param \Illuminate\Http\Request $request 
     *  @return \Illuminate\Http\Response 
     */
    public function store(Request $request)
    {
        $digimon= new Digimon();
        $digimon->name= $request->name;
        $digimon->level= $request->level;
        $digimon->type= $request->type;
        $digimon->color= $request->color;
    
        $digimon->save();
    }

    /**
     * Display the specified resource.
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function show(string $id)
    {
        $digimon = Digimon::find($id);
        return $digimon;
    }

    /**
     * Update the specified resource in storage.
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, string $id)
    {
        $digimon= Digimon::findOrFail($request->id);
        $digimon->name = $request->name; 
        $digimon->level = $request->level; 
        $digimon->type = $request->type; 
        $digimon->color = $request->color; 

        $digimon->save();
        return $digimon;
    }

    /**
     * Remove the specified resource from storage.
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(string $id)
    {
        $digimon= Digimon::destroy($id);
        return $digimon;
    }
}
