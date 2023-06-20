import Image from 'next/image';
import { contact } from '@/data/config';

export default function Stack() {
  return (
    <div>
      <div className="w-full overflow-x-hidden">
        <h2 className="relative mx-0 mb-4 text-left landingSectionTitle max-w-max md:w-max ">
          {contact.title}
        </h2>
      </div>
      <p>
        Shoot me an email:{' '}
        <a
          className="text-black transition-colors duration-500 dark:text-white"
          href={`mailto:${contact.email}`}
        >
          {contact.email}
        </a>
      </p>
      <div className="flex mt-5 space-x-5 transition-colors duration-500 text-lightText">
        {contact.github && (
          <a
            href={`https://github.com/LeeGangMin0524`}
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/static/icons/github.svg"
              width={20}
              height={20}
              alt="Github icon"
            />
          </a>
        )}
        {contact.dribbble && (
          <a
            href={`https://dribbble.com/${contact.dribbble}`}
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/static/icons/dribbble.svg"
              width={20}
              height={20}
              alt="Dribbble icon"
            />
          </a>
        )}
        {contact.linkedin && (
          <a
            href={`https://linkedin.com/in/${contact.linkedin}`}
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/static/icons/linkedin.svg"
              width={20}
              height={20}
              alt="LinkedIn icon"
            />
          </a>
        )}
      </div>
    </div>
  );
}
