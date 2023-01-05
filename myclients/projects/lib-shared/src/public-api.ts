// this is to allow us to use these components outside the library, you can either put every file in here or
// add each section in index.ts and then add all the index files here

// Method - Add each file individiuly
// export * from './lib/lib-shared.service';
// export * from './lib/lib-shared.component';
// export * from './lib/lib-shared.module';

// Method - Use index.ts so organize each section then add each index.ts in here
export * from './lib/components'    // this uses the index.ts file to export everything in components to outside of lib
export * from './lib/services'    // this uses the index.ts file to export everything in services to outside of lib
export * from './lib/models'    // this uses the index.ts file to export everything in models to outside of lib
