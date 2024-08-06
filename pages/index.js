
import React from 'react';
import Header from '../components/Header';
import StarRating from '@/components/StarRating';

export default function Home() {
  return (
    <div className="bg-green-900 text-white min-h-screen flex flex-col items-center justify-center">
       <main className="flex flex-col items-center justify-center flex-grow">
        <h1 className="text-6xl font-bold">Mortgages made  simple</h1>
        
        <button className="bg-green-600 px-6 py-3 rounded mt-6">Start my approval</button>
        <h3 className="bg">3 min | no credit impact</h3>
      </main>
      <StarRating/>
    </div>
  );
}
