'use client';

import { useEffect, useState } from 'react';
import styles from './Hero.module.scss';

const stacks = [
  { name: 'Postgres.', color: '#336791' },
  { name: 'Oracle.', color: '#F80000' },
  { name: 'SQL Server.', color: '#CC2927' },
  { name: 'Spring.', color: '#6DB33F' },
  { name: 'Docker.', color: '#2496ED' },
  { name: 'Insomnia.', color: '#F05B23' },
  { name: 'Spring Security.', color: '#6DB33F' },
  { name: 'Spring Cloud.', color: '#6DB33F' },
];

const typingSpeed = 100;
const pauseTime = 1500;

export default function Hero() {
  const fixedText = 'Sou desenvolvedor Backend';
  const [displayText, setDisplayText] = useState('com experiência em Java.');
  const [currentStackIndex, setCurrentStackIndex] = useState(-1);
  const [typing, setTyping] = useState(true); // true = digitando, false = apagando

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (currentStackIndex === -1) {
      // Começa mostrando a frase fixa "com experiência em Java."
      if (displayText.length < 'com experiência em Java.'.length && typing) {
        timeout = setTimeout(() => {
          setDisplayText('com experiência em Java.'.slice(0, displayText.length + 1));
        }, typingSpeed);
      } else if (typing) {
        // Pausa e começa apagar
        timeout = setTimeout(() => setTyping(false), pauseTime);
      } else if (!typing && displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, typingSpeed);
      } else if (!typing && displayText.length === 0) {
        setTyping(true);
        setCurrentStackIndex(0); // inicia o loop nas stacks
      }
    } else {
      // Loop das stacks
      const stackName = stacks[currentStackIndex].name;

      if (typing) {
        if (displayText.length < stackName.length) {
          timeout = setTimeout(() => {
            setDisplayText(stackName.slice(0, displayText.length + 1));
          }, typingSpeed);
        } else {
          timeout = setTimeout(() => setTyping(false), pauseTime);
        }
      } else {
        if (displayText.length > 0) {
          timeout = setTimeout(() => {
            setDisplayText(displayText.slice(0, -1));
          }, typingSpeed);
        } else {
          setTyping(true);
          setCurrentStackIndex((currentStackIndex + 1) % stacks.length);
        }
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, typing, currentStackIndex]);

  return (
    <section className={styles.hero}>
      <h1>
        {fixedText}
      </h1>
      <p>
        {currentStackIndex === -1 ? (
          displayText
        ) : (
          <span style={{ color: stacks[currentStackIndex].color }}>
            {displayText}
          </span>
        )}
      </p>
    </section>
  );
}
