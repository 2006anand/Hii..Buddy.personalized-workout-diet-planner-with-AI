import React, { useState } from 'react';
import { UserProfile } from '../types';

interface WorkoutFormProps {
  onSubmit: (profile: UserProfile) => void;
  loading: boolean;
}

const WorkoutForm: React.FC<WorkoutFormProps> = ({ onSubmit, loading }) => {
  const [step, setStep] = useState(1);
  const [profile, setProfile] = useState<UserProfile>({
    age: 20,
    gender: 'Male',
    height: 175,
    weight: 70,
    fitnessGoal: 'Weight Loss',
    experienceLevel: 'Beginner',
    dailySchedule: '45 min',
    workoutResources: ['Yoga Mat'],
    healthConditions: '',
    dietaryPreference: 'Anything',
    culturalFoodHabit: 'North Indian',
    monthlyBudget: 'Medium',
    workoutDays: 4
  });

  const [searchEquipment, setSearchEquipment] = useState('');

  const equipmentOptions = [
    'Full Gym', 'Dumbbells', 'Kettlebells', 'Barbell', 'Pull-up Bar',
    'Resistance Bands', 'Yoga Mat', 'Jump Rope', 'Weight Bench', 'Squat Rack',
    'Medicine Ball', 'Foam Roller', 'Treadmill', 'Stationary Bike', 'Rowing Machine',
    'Elliptical', 'TRX Trainer', 'Stability Ball', 'Punching Bag', 'Ankle Weights',
    'Steps / Box', 'Dip Station'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProfile(prev => ({ ...prev, [name]: value }));
  };

  const toggleEquipment = (eq: string) => {
    setProfile(prev => {
      const current = prev.workoutResources;
      if (current.includes(eq)) {
        return { ...prev, workoutResources: current.filter(r => r !== eq) };
      } else {
        return { ...prev, workoutResources: [...current, eq] };
      }
    });
  };

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  const inputClasses = "w-full p-6 rounded-2xl bg-slate-800/40 border-2 border-slate-800 text-white font-bold text-xl focus:border-indigo-500 focus:bg-indigo-500/5 focus:ring-0 outline-none transition-all placeholder:text-slate-600";
  const labelClasses = "block text-[10px] font-syncopate font-bold uppercase tracking-[0.4em] text-slate-500 mb-4";

  return (
    <div className="max-w-4xl mx-auto glass-dark rounded-[48px] shadow-2xl relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-indigo-600/20 transition-all duration-1000"></div>

      <div className="p-10 md:p-16 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
          <div className="space-y-2">
            <h2 className="text-5xl font-black italic tracking-tighter uppercase leading-none font-inter text-white">
              BIO <span className="text-indigo-500">HACKING</span>
            </h2>
            <div className="flex items-center gap-3">
              <div className="w-12 h-1 bg-indigo-500 rounded-full"></div>
              <p className="text-[11px] font-syncopate font-bold text-slate-400 uppercase tracking-[0.3em]">
                INIT PARAMETERS
              </p>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <div className="px-6 py-2 rounded-xl border border-emerald-500/20 bg-emerald-500/5 backdrop-blur-md">
              <span className="text-[10px] font-syncopate font-bold text-emerald-400 uppercase tracking-widest flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                SYSTEM READY
              </span>
            </div>
          </div>
        </div>

        {step === 1 && (
          <div className="space-y-12 animate-in fade-in slide-in-from-right-8 duration-500">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="group/input">
                <label className={labelClasses}>Physical Age</label>
                <input type="number" name="age" value={profile.age} onChange={handleInputChange} className={inputClasses} />
              </div>
              <div>
                <label className={labelClasses}>Biological Gender</label>
                <select name="gender" value={profile.gender} onChange={handleInputChange} className={inputClasses}>
                  <option className="bg-slate-900">Male</option>
                  <option className="bg-slate-900">Female</option>
                  <option className="bg-slate-900">Non-Binary</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <label className={labelClasses}>Current Mass (kg)</label>
                <input type="number" name="weight" value={profile.weight} onChange={handleInputChange} className={inputClasses} />
              </div>
              <div>
                <label className={labelClasses}>Stature (cm)</label>
                <input type="number" name="height" value={profile.height} onChange={handleInputChange} className={inputClasses} />
              </div>
            </div>

            <div className="pt-8">
              <button 
                onClick={nextStep}
                className="btn-shimmer w-full py-6 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-black uppercase tracking-[0.3em] text-sm shadow-2xl shadow-indigo-500/40 transition-all hover:-translate-y-1 active:scale-95 font-inter"
              >
                NEXT PHASE_
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-12 animate-in fade-in slide-in-from-right-8 duration-500">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <label className={labelClasses}>Skill Tier</label>
                <select name="experienceLevel" value={profile.experienceLevel} onChange={handleInputChange} className={inputClasses}>
                  <option className="bg-slate-900">Beginner</option>
                  <option className="bg-slate-900">Intermediate</option>
                  <option className="bg-slate-900">Advanced</option>
                  <option className="bg-slate-900">Elite</option>
                </select>
              </div>
              <div>
                <label className={labelClasses}>Temporal Allocation</label>
                <select name="dailySchedule" value={profile.dailySchedule} onChange={handleInputChange} className={inputClasses}>
                  <option className="bg-slate-900">15 min</option>
                  <option className="bg-slate-900">30 min</option>
                  <option className="bg-slate-900">45 min</option>
                  <option className="bg-slate-900">60 min</option>
                  <option className="bg-slate-900">90 min+</option>
                </select>
              </div>
            </div>

            <div>
              <label className={labelClasses}>Primary Directive</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {['Weight Loss', 'Muscle Gain', 'Improve Stamina', 'Maintenance', 'Flexibility & Mobility'].map(obj => (
                  <button
                    key={obj}
                    type="button"
                    onClick={() => setProfile({...profile, fitnessGoal: obj})}
                    className={`py-5 px-4 rounded-xl font-bold uppercase text-[10px] tracking-widest border-2 transition-all font-syncopate ${
                      profile.fitnessGoal === obj 
                      ? 'border-indigo-500 bg-indigo-500/10 text-indigo-400 text-glow' 
                      : 'border-slate-800 bg-slate-800/20 text-slate-500'
                    }`}
                  >
                    {obj}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className={labelClasses}>Resource Inventory</label>
              <div className="relative mb-6">
                <input 
                  type="text" 
                  placeholder="Scan for hardware..." 
                  className="w-full pl-14 pr-6 py-5 rounded-2xl bg-slate-800/40 border-none text-sm font-bold outline-none text-white focus:ring-1 focus:ring-indigo-500/50"
                  value={searchEquipment}
                  onChange={(e) => setSearchEquipment(e.target.value)}
                />
                <svg className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
              </div>
              <div className="flex flex-wrap gap-2 max-h-48 overflow-y-auto pr-2 no-scrollbar">
                {equipmentOptions.filter(e => e.toLowerCase().includes(searchEquipment.toLowerCase())).map(eq => (
                  <button
                    key={eq}
                    type="button"
                    onClick={() => toggleEquipment(eq)}
                    className={`px-5 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest border-2 transition-all font-syncopate ${
                      profile.workoutResources.includes(eq)
                      ? 'bg-indigo-600 border-indigo-600 text-white shadow-lg shadow-indigo-500/20'
                      : 'bg-slate-800/40 border-slate-800 text-slate-500'
                    }`}
                  >
                    {eq}
                  </button>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-2 border-t border-slate-800 pt-8">
                 <span className="text-[10px] font-syncopate font-bold text-slate-500 uppercase tracking-widest block w-full mb-4">DEPLOYED ASSETS ({profile.workoutResources.length})</span>
                 {profile.workoutResources.map(eq => (
                   <span key={eq} className="bg-slate-900 border border-indigo-500/30 text-indigo-400 px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 group/tag">
                     {eq} <button onClick={() => toggleEquipment(eq)} className="hover:text-red-500 transition-colors">×</button>
                   </span>
                 ))}
              </div>
            </div>

            <div className="flex gap-4 pt-10">
              <button 
                onClick={prevStep}
                className="flex-1 py-6 rounded-2xl border-2 border-slate-800 text-slate-500 font-black uppercase tracking-[0.3em] text-xs hover:bg-slate-800/40 transition-all font-inter"
              >
                PREV_
              </button>
              <button 
                onClick={nextStep}
                className="btn-shimmer flex-[2] py-6 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-black uppercase tracking-[0.3em] text-sm shadow-2xl shadow-indigo-500/40 transition-all hover:-translate-y-1 active:scale-95 font-inter"
              >
                NUTRITION_
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-12 animate-in fade-in slide-in-from-right-8 duration-500">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <label className={labelClasses}>Fuel Protocol</label>
                <select name="dietaryPreference" value={profile.dietaryPreference} onChange={handleInputChange} className={inputClasses}>
                  <option className="bg-slate-900">Anything</option>
                  <option className="bg-slate-900">Vegetarian</option>
                  <option className="bg-slate-900">Non-Vegetarian</option>
                  <option className="bg-slate-900">Vegan</option>
                  <option className="bg-slate-900">Keto</option>
                  <option className="bg-slate-900">Paleo</option>
                </select>
              </div>
              <div>
                <label className={labelClasses}>Financial Range</label>
                <select name="monthlyBudget" value={profile.monthlyBudget} onChange={handleInputChange} className={inputClasses}>
                  <option className="bg-slate-900">Low</option>
                  <option className="bg-slate-900">Medium</option>
                  <option className="bg-slate-900">High</option>
                </select>
              </div>
            </div>

            <div>
              <label className={labelClasses}>Regional Intake Preference</label>
              <input 
                type="text" 
                name="culturalFoodHabit" 
                value={profile.culturalFoodHabit} 
                onChange={handleInputChange} 
                className={inputClasses} 
                placeholder="NORTH INDIAN"
              />
            </div>

            <div className="flex gap-4 pt-10">
              <button 
                onClick={prevStep}
                className="flex-1 py-6 rounded-2xl border-2 border-slate-800 text-slate-500 font-black uppercase tracking-[0.3em] text-xs hover:bg-slate-800/40 transition-all font-inter"
              >
                PREV_
              </button>
              <button 
                onClick={() => onSubmit(profile)}
                disabled={loading}
                className={`btn-shimmer flex-[2] py-6 bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-800 text-white rounded-2xl font-black uppercase tracking-[0.3em] text-sm shadow-2xl shadow-emerald-500/40 transition-all hover:-translate-y-1 flex items-center justify-center gap-3 font-inter`}
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-4 border-white/20 border-t-white rounded-full animate-spin" />
                    COMPUTING_
                  </>
                ) : "GENERATE PLAN_"}
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="h-2 w-full bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-20"></div>
    </div>
  );
};

export default WorkoutForm;
