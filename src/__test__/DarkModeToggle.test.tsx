import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import DarkModeToggle from '../components/DarkModeToggle'; // Sesuaikan dengan path yang benar

describe('DarkModeToggle Component', () => {
  test('renders with Sun icon initially', () => {
    render(<DarkModeToggle />);
    const sunIcon = screen.getByRole('button').querySelector('svg'); // Mengambil elemen SVG
    expect(sunIcon).toBeInTheDocument();
  });

  test('toggles to dark mode and shows Moon icon', () => {
    render(<DarkModeToggle />);

    // Klik tombol untuk mengaktifkan dark mode
    const button = screen.getByRole('button');
    fireEvent.click(button);

    // Memeriksa apakah kelas 'dark' ditambahkan
    expect(document.documentElement.classList.contains('dark')).toBe(true);

    // Memeriksa apakah ikon bulan ditampilkan
    const moonIcon = screen.getByRole('button').querySelector('svg'); // Mengambil elemen SVG
    expect(moonIcon).toBeInTheDocument();
  });

  test('toggles back to light mode and shows Sun icon', () => {
    render(<DarkModeToggle />);

    // Klik tombol untuk mengaktifkan dark mode
    const button = screen.getByRole('button');
    fireEvent.click(button);

    // Klik tombol lagi untuk kembali ke light mode
    fireEvent.click(button);

    // Memeriksa apakah kelas 'dark' dihapus
    expect(document.documentElement.classList.contains('dark')).toBe(false);

    // Memeriksa apakah ikon matahari ditampilkan
    const sunIcon = screen.getByRole('button').querySelector('svg'); // Mengambil elemen SVG
    expect(sunIcon).toBeInTheDocument();
  });
});
