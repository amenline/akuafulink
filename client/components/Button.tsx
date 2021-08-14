import Link from 'next/link';

interface Props {
  text: string;
  link?: string;
  secondary?: boolean;
  extraStyles?: string;
}

const Button: React.FC<Props> = ({ text, link, secondary, extraStyles }) => {
  if (secondary && (link != '' || link != null)) {
    return (
      <Link href={`/${link}`}>
        <a
          className={`border-4 p-2 rounded-lg border-primary-500 hover:border-primary-100 ${extraStyles}`}
        >
          <button>{text}</button>
        </a>
      </Link>
    );
  } else if (secondary && (link == '' || link == null)) {
    return (
      <a
        className={`border-4 p-2 rounded-lg border-primary-500 hover:border-primary-100 ${extraStyles}`}
      >
        <button>{text}</button>
      </a>
    );
  } else if (!secondary && (link != '' || link != null)) {
    return (
      <Link href={`/${link}`}>
        <a
          className={`p-2 rounded-lg bg-primary-500 hover:bg-primary-200 ${extraStyles}`}
        >
          <button>{text}</button>
        </a>
      </Link>
    );
  } else {
    return (
      <a
        className={`p-2 rounded-lg bg-primary-500 hover:bg-primary-200 ${extraStyles}`}
      >
        <button>{text}</button>
      </a>
    );
  }
};

export default Button;
