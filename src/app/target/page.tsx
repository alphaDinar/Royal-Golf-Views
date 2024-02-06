const Target = ({searchParams} : {searchParams : {obj : string}}) => {
  const tester = searchParams.obj;
  console.log(tester);
  console.log(JSON.parse(tester).age);

  return ( 
    <main>
      target
    </main>
   );
}
 
export default Target;