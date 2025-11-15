'use client';
import React from 'react';

interface ClickableSpeakerTextProps {
    text: string;
    onSpeakerClick: (abstractKey: string) => void;
}

// Map of speaker names to their abstract keys
const speakerMap: { [key: string]: string } = {
    'Dag Trygve Truslew Haug': 'dag-haug',
    'George Mikros': 'george-mikros',
    'Carola Trips': 'carola-trips',
    'Alexandros Tantos': 'alexandros-tantos',
    'Ioanna Sitaridou': 'ioanna-sitaridou',
    'Mirjam Fried': 'mirjam-fried',
    'Francesca Dell\'Oro': 'francesca-delloro',
    'Daniel Riaño Rufilanchas': 'daniel-riano',
    'Iván Andrés-Alba': 'ivan-andres',
    'Stavroula Kefala': 'stavroula-kefala',
    'Kiki Nikiforidou': 'kiki-nikiforidou',
    'Vassiliki Geka': 'vassiliki-geka',
    'Anna Piata': 'anna-piata',
    'Nikolaos Lavidas': 'lavidas-team',
    'Esteban Belmehdi': 'chs-team',
    'Ioanna Papadopoulou': 'chs-team',
    'Julien Razanajao': 'chs-team'
};

export default function ClickableSpeakerText({ text, onSpeakerClick }: ClickableSpeakerTextProps) {
    // Parse the text and identify speaker names
    const renderText = () => {
        let result: React.ReactNode[] = [];
        let remainingText = text;
        let lastIndex = 0;

        // Check for "By [Speaker Name]" pattern
        const byPattern = /By\s+([^(]+?)(?:\s+\(|\s*$)/g;
        let match;
        const matches: { name: string; index: number; length: number }[] = [];

        while ((match = byPattern.exec(text)) !== null) {
            const speakerName = match[1].trim();
            // Check if this name or a partial match exists in our speaker map
            let abstractKey: string | null = null;
            for (const [key, value] of Object.entries(speakerMap)) {
                if (speakerName.includes(key) || key.includes(speakerName)) {
                    abstractKey = value;
                    break;
                }
            }

            if (abstractKey) {
                matches.push({
                    name: speakerName,
                    index: match.index,
                    length: match[0].length - (match[0].endsWith('(') ? 1 : 0)
                });
            }
        }

        // If no matches, return plain text
        if (matches.length === 0) {
            return <span>{text}</span>;
        }

        // Build the result with clickable names
        matches.forEach((matchData, idx) => {
            // Add text before the match
            if (matchData.index > lastIndex) {
                result.push(
                    <span key={`text-${idx}`}>
                        {text.substring(lastIndex, matchData.index)}
                    </span>
                );
            }

            // Find the abstract key for this speaker
            let abstractKey: string | null = null;
            for (const [key, value] of Object.entries(speakerMap)) {
                if (matchData.name.includes(key) || key.includes(matchData.name)) {
                    abstractKey = value;
                    break;
                }
            }

            // Add "By " text
            result.push(<span key={`by-${idx}`}>By </span>);

            // Add clickable speaker name
            if (abstractKey) {
                result.push(
                    <button
                        key={`speaker-${idx}`}
                        onClick={(e) => {
                            e.stopPropagation();
                            onSpeakerClick(abstractKey!);
                        }}
                        className="text-primary-600 hover:text-primary-700 font-semibold underline decoration-dotted hover:decoration-solid"
                    >
                        {matchData.name}
                    </button>
                );
            } else {
                result.push(<span key={`speaker-${idx}`}>{matchData.name}</span>);
            }

            lastIndex = matchData.index + matchData.length;
        });

        // Add remaining text
        if (lastIndex < text.length) {
            result.push(<span key="text-end">{text.substring(lastIndex)}</span>);
        }

        return <>{result}</>;
    };

    return <span className="text-sm text-gray-700">{renderText()}</span>;
}
