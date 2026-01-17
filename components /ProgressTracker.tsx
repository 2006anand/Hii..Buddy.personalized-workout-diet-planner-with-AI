import React, { useState, useMemo } from 'react';
import { ProgressEntry, UserProfile } from '../types';
import LogForm from './LogForm';

interface ProgressTrackerProps {
  logs: ProgressEntry[];
  onAddLog: (entry: ProgressEntry) => void;
  userProfile: UserProfile | null;
}

const ProgressTracker: React.FC<ProgressTrackerProps> = ({ logs, onAddLog, userProfile }) => {
  const [showLogForm, setShowLogForm] = useState(false);
  
  const sortedLogsByDate = useMemo(() => 
    [...logs].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
  , [logs]);
  
  const initialWeight = userProfile?.weight || 70;
  const userHeight = userProfile?.height || 175;

  const latestLog = sortedLogsByDate[sortedLogsByDate.length - 1];
  const latestWeight = latestLog?.bodyWeight || initialWeight;
  const totalWorkouts = logs.filter(l => l.workoutCompleted).length;

  const heightInMeters = userHeight / 100;
  const bmi = heightInMeters > 0 ? (latestWeight / (heightInMeters * heightInMeters)) : 0;

  return (
    <div className="max-w-6xl mx-auto space-y-12 pb-40 px-4 animate-in">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-b border-white/5 pb-8">
        <div>
          <h2 className="text-4xl font-black text-white italic tracking-tighter uppercase">Bio Logs</h2>
          <p className="text-[11px] text-zinc-500 mt-2 font-medium tracking-tight">Biometric tracking and mission historical data.</p>
        </div>
        <button 
          onClick={() => setShowLogForm(true)}
          className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold uppercase text-[10px] tracking-widest transition-all shadow-lg shadow-indigo-500/20"
        >
          Capture Data_
        </button>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="glass-dark p-8 rounded-3xl border border-white/5 text-center">
          <span className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest">Weight</span>
          <div className="text-3xl font-black text-white mt-2 leading-none">{latestWeight} <span className="text-xs text-zinc-500">KG</span></div>
        </div>
        <div className="glass-dark p-8 rounded-3xl border border-white/5 text-center">
          <span className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest">BMI</span>
          <div className="text-3xl font-black text-white mt-2 leading-none">{bmi.toFixed(1)}</div>
        </div>
        <div className="glass-dark p-8 rounded-3xl border border-white/5 text-center">
          <span className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest">Sessions</span>
          <div className="text-3xl font-black text-emerald-500 mt-2 leading-none">{totalWorkouts}</div>
        </div>
        <div className="glass-dark p-8 rounded-3xl border border-white/5 text-center">
          <span className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest">Unit Height</span>
          <div className="text-3xl font-black text-zinc-400 mt-2 leading-none">{userHeight} <span className="text-xs text-zinc-500">CM</span></div>
        </div>
      </div>

      <div className="glass-dark rounded-3xl border border-white/5 overflow-hidden">
        <div className="px-8 py-6 border-b border-white/5">
          <h3 className="text-[10px] font-bold uppercase tracking-widest text-white">Historical Sync Records</h3>
        </div>
        <div className="divide-y divide-white/5">
          {sortedLogsByDate.map((log, i) => (
            <div key={i} className="px-8 py-5 flex justify-between items-center text-[11px]">
              <span className="text-zinc-500 font-medium uppercase">{new Date(log.date).toLocaleDateString()}</span>
              <span className="text-white font-bold">{log.bodyWeight} KG</span>
              <span className={`px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest ${log.workoutCompleted ? 'bg-emerald-500/10 text-emerald-400' : 'bg-red-500/10 text-red-400'}`}>
                {log.workoutCompleted ? 'Active' : 'Inactive'}
              </span>
            </div>
          ))}
          {sortedLogsByDate.length === 0 && (
            <div className="p-12 text-center text-zinc-600 text-[10px] uppercase font-bold tracking-widest">Awaiting Initial Data Pulse</div>
          )}
        </div>
      </div>

      {showLogForm && (
        <LogForm 
          initialWeight={latestWeight}
          onSave={(entry) => {
            onAddLog(entry);
            setShowLogForm(false);
          }}
          onCancel={() => setShowLogForm(false)}
        />
      )}
    </div>
  );
};

export default ProgressTracker;
