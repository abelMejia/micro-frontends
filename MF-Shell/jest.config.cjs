module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  globals: {
    'ts-jest': {
      tsconfig: './tsconfig.json'
    }
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '^mf_characters/CharacterList$': '<rootDir>/src/__mocks__/CharacterListMock.tsx',
    '^mf_character_detail/CharacterDetail$': '<rootDir>/src/__mocks__/CharacterDetailMock.tsx'
  },
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  }
};
