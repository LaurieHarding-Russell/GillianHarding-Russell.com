import { Component } from '@angular/core';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.html',
  styles: [`
    .book-title {
      text-align: center;
      margin: 25px 0 0 0 ;
    }

    .list {
      white-space: pre-line;
    }
  `]
})
export class BookListComponent {

  chatbooks = `
  1. <i>Fox Love</i> (The Alfred Gustav Press, 2016).
  2. <i>Where the days and nights are equal length</i> (M. C International, 2014) ISBN 9780993676925
  3. <i>Maya: Poems for the Summer Solstice</i> (Leaf Press, 2014).
  4. <i>Apples and Mice</i> (Alfred Gustav Press, 2008.) ISBN 978-0-9811327-0-9
  5. <i>Stories of Snow, a ‘holm’ or short chapbook</i> (The Alfred Gustav Press, 2011).
  6. <i>At the End of the Garden</i> (Green Publications, 1990.) IBSN: 0-9691555-7-3
`


  anthologies = `
1. <i>Resilience: a poetic response to sexual assault ed. Sue Goyette</i> (University of Regina Press, upcoming).

2 <i>Heartwood: For the Love of Trees, ed. Lesley Strutt</i> (League of Canadian Poets, 2018). ISBN 978-1-896216-51-5

3. <i>Line Dance, ed. Gerry Hill</i> (Burton House, 2016). ISBN 97809948666912

4. <i>Fire and Sky: A Canadian Anthology of Poem</i>, ed. Jocelyn Verret (Brydge Builder Press, 2016)

5. <i>I Found It At the Movies, ed. Ruth Roach Pierson</i> (Guernica, 2014). ISBN 978-1-55071-897-3

6. <i>Family Ties: Memories, Poems and Good Food</i>, ed. Kim Grove (Hiddenbrook, 2014). IBSN 978-1-927725-17-7

7. <i>The Inspired Heart vol. 3</i>, ed. Melinda Cochrane. M.C. International.2014). ISBN 9780993676949

8. <i>The Inspired Heart vol.2</i>, ed. Bruce Kauffman.  (M.C International, 2013). ISBN 9781494344627

9. <i>Fathers and Grandfathers</i>, ed. Donna Goodrich (Hiddenbrook, 2013). ISBN 978-1-927725-07-8

10. <i>Poet to Poet</i>, ed. Julia Roorda and Elana Wolff (Guernica, 2012). ISBN 978-1-5507-645-0

11. <i>That Not Forgotten</i>, ed. Bruce Kauffman (Hiddenbrook, 2012). ISBN 978-1-897475-89-8

12 <i>Letting Go: Poems about surviving a loss</i>, ed Hugh MacDonald (Black Moss, 2005). 
IBSN 0-88753-393-0

13. <i>Land/Space: An Anthology of Speculative Prairie Literature</i> (Tesseract, 2003). IBSN: 1-895836-92-. (98-100, 184-6)Mekler & Deahl, 2000

14. <i>The Common Sky: Poems against the US-led Invasion of Iraq</i> (Threesquare Press, 2003). 	
IBSN: 0-9732578-0-6

15. <i>No Choice but to Trust</i> (Mekler & Deahl, 2000). IBSN, 1-884206-08-5

16. <i>Waiting for you to Speak</i> (Mekler & Deahl, 1999). IBSN: 1-884206-05-0
`;

}
